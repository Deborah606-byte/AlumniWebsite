export default function SignUpHeader() {
  return (
    <div className="bg-secondary-100 w-full py-32 px-8">
      <a href="#" clas="font-extrabold mx-auto">
        <h1 className="text-secondary-200 text-2xl text-center mb-4">
          <span className="text-primary text-3xl">A</span>lumni
          <span className="text-primary text-3xl">N</span>exus
        </h1>
      </a>
      <h2 className="text-primary text-center font-semibold text-4xl mb-4">
        Welcome!
      </h2>
      <p className="text-secondary-200 mb-4 leading-relaxed text-justify">
        At AlumniNexus, the seeds of lifelong connections were sown. Graduating
        from this prestigious institution, we embarked on diverse paths, each
        alumni with a unique destination. Yet, our shared history at AlumniNexus
        continues to bind us together, forming a resilient network of talent and
        ambition.
      </p>

      <p className="text-secondary-200 leading-mb italic text-center font-light mb-6">
        Today, this platform stands as a testament to our unwavering commitment
        to the values and spirit of AlumniNexus.
      </p>

      <div className="text-center">
        <p className="text-primary text-xl">Already have an account</p>
        <a
          className="text-secondary-200 hover:underline hover:text-primary"
          href="/auth/login"
        >
          Login
        </a>
      </div>
    </div>
  );
}
