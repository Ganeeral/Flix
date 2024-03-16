import React from "react";
import CategorySlider from "@/components/categoryslider/categorySlider";
import LineMain from "@/components/lineMain/LineMain";
import Card from "@/components/videoCard/Card";

const Shorts = () => {
  return (
    <>
      <CategorySlider />
      <LineMain />
      <div className="grid grid-cols-1 flix:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4 m-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Shorts;
