import FeatureCard from "./FeaturedCard";
export default function Featured(){
    return (
        <div className="bg-[#FAF5F5] p-12  flex flex-col justify-center max-md:px-4">
            
            <div className="text-xl font-bold  pt-11 pl-7 text-gray-600">Featured Works</div>
 
            <FeatureCard
        imageSrc="2.png"
        imageAlt="Designing Dashboard"
        title="Designing Dashboards"
        year="2020"
        category="Dashboard"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolorum nihil. Facere, omnis! Eligendi repudiandae tenetur facere beatae esse expedita voluptates incidunt. Illum, modi saepe."
      />

      <FeatureCard
        imageSrc="1.png"
        imageAlt="Designing Dashboard"
        title="Designing Dashboards"
        year="2020"
        category="Dashboard"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolorum nihil. Facere, omnis! Eligendi repudiandae tenetur facere beatae esse expedita voluptates incidunt. Illum, modi saepe."
      />

      <FeatureCard
        imageSrc="3.png"
        imageAlt="Designing Dashboard"
        title="Designing Dashboards"
        year="2020"
        category="Dashboard"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, dolorum nihil. Facere, omnis! Eligendi repudiandae tenetur facere beatae esse expedita voluptates incidunt. Illum, modi saepe."
      />
  

        </div>
    )
}