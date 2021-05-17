import { useState } from "react";
import Head from "next/head";
import Form from "../components/Form";

export default function Home() {
  const [formData, setFormData] = useState({ country: "", number: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class="container">
      <Head>
        <title>Music Stats</title>
        <meta
          name="description"
          content="Find your best tracks and artists according to country!"
        />
      </Head>
      <main>
        <h1>MUSIC STATS</h1>
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </main>
    </div>
  );
}
