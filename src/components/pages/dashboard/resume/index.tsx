"use client";

import { FormProvider, useForm } from "react-hook-form";
import { User } from "next-auth";
import { useCallback, useEffect, useRef } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { useParams } from "next/navigation";
import { updateResumeData } from "@/db/actions";
import { mergician } from "mergician";

import { PanelGroup } from "./structure-sidebar/panel-group";
import { MenuMobile } from "./structure-sidebar/menu-mobile";

type ResumePageProps = {
  title: string;
  initialData: Partial<ResumeData>;
  user?: User;
};

export default function ResumePage({
  title,
  initialData,
  user,
}: ResumePageProps) {
  const params = useParams();

  const resumeId = params.id as string;

  const defaultValues: ResumeData = {
    content: {
      summary: "<p></p>",
      image: {
        url: user?.image ?? "",
        visible: true,
      },
      infos: {
        email: user?.email ?? "",
        fullName: user?.name ?? "",
        headline: "",
        location: "",
        phone: "",
        website: "",
      },
      certifications: [],
      educations: [],
      experiences: [],
      languages: [],
      projects: [],
      skills: [],
      socialMedias: [],
    },
    structure: {
      template: "ditto",
      colorTheme: "slate",
      language: "portuguese",
      layout: {
        mainSections: [
          { key: "socialMedias" },
          { key: "summary" },
          { key: "experiences" },
          { key: "educations" },
          { key: "certifications" },
          { key: "projects" },
        ],
        sidebarSections: [{ key: "languages" }, { key: "skills" }],
      },
    },
  };

  const methods = useForm<ResumeData>({
    defaultValues: mergician(defaultValues, initialData),
  });

  const data = methods.watch();
  const debouncedData = useDebounce(JSON.stringify(data));

  const shouldSave = useRef(false);

  const handleSaveUpdates = useCallback(() => {
    try {
      if (!shouldSave.current) {
        shouldSave.current = true;
        return;
      }

      const updatedData = methods.getValues();

      updateResumeData(resumeId, updatedData);
    } catch (error) {
      console.error(error);
    }
  }, [methods, resumeId]);

  useEffect(() => {
    handleSaveUpdates();
  }, [debouncedData, handleSaveUpdates]);

  return (
    <FormProvider {...methods}>
      <main className="w-full h-screen overflow-hidden">
        <MenuMobile />
        <PanelGroup title={title} />
      </main>
    </FormProvider>
  );
}
