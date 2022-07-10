import type { NextPage } from "next";
import MainLayout from "../components/Layouts/MainLayout";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div>home</div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["Nabvar"])),
  },
});

export default Home;
