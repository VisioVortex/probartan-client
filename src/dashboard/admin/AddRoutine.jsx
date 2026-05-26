import { useState } from "react";
import axios from "axios";

function AddRoutine() {

  const [success, setSuccess] = useState("");

  const handleAddRoutine = (e) => {

    e.preventDefault();

    const form = e.target;

    const batch = form.batch.value;
    const day = form.day.value;
    const subject = form.subject.value;
    const time = form.time.value;

    const routineData = {
      batch,
      day,
      subject,
      time,
    };

    axios
      .post("https://probartan-server.onrender.com/routine", routineData)
      .then(() => {
        setSuccess("Routine Added Successfully");
        form.reset();
      });

  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Add Routine
      </h1>

      <form onSubmit={handleAddRoutine} className="space-y-4">

        <input
          type="text"
          name="batch"
          placeholder="Batch (SSC/HSC)"
          className="w-full border p-3"
          required
        />

        <input
          type="text"
          name="day"
          placeholder="Day (Sunday)"
          className="w-full border p-3"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full border p-3"
          required
        />

        <input
          type="text"
          name="time"
          placeholder="Time (10:00 AM)"
          className="w-full border p-3"
          required
        />

        <button className="bg-blue-600 text-white px-6 py-3">
          Add Routine
        </button>

      </form>

      <p className="text-green-600 mt-4">
        {success}
      </p>

    </div>
  );
}

export default AddRoutine;