import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import ElonContainer from "@/components/What-Can-Elon-Musk-Do/ElonContainer";

export default function WhatCanElonMuskDo() {
  return (
    <Layout title={`What Can Elon Musk Do ?`} description={`Explore the wild and crazy possibilities of Elon Musk's $174 billion fortune.`} favicon={`/elon.ico`} keywords={`What Can Elon Musk Do, Elon musk money, spend elon musk money`}>
      <Logo />
      <ElonContainer />
    </Layout>
  )
}
