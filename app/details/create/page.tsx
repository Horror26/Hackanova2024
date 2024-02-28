import DetailsForm from "@/components/shared/DetailsForm";

export const metadata={
  title:"Registerion form",
  description:"add your profile details for  registration"
}
const Details = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Registerion form
        </h3>
      </section>

      <div className="wrapper my-8">
        <DetailsForm />
      </div>
    </>
  );
};

export default Details;
