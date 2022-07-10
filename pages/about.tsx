import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About: NextPage = () => {
  return (
    <MainLayout>
      <div>about</div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["Nabvar"])),
  },
});

export default About;
