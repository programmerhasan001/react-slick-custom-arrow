import getData from "../utilities/getData";

const About = ({ data }) => {
  console.log(data.title);
  return (
    <div>
      <h2>Hello from about</h2>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getData();

  // Pass data to the page via props
  return { props: { data } };
}

export default About;
