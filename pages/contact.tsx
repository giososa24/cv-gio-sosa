import React from "react";
import MainLayout from "../components/Layouts/MainLayout";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Contact: NextPage = () => {
  return (
    <MainLayout>
      <div>contact</div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["Nabvar"])),
  },
});

export default Contact;
