import { useState } from "react";
import { Calendar } from "rently-components";

const TenantsPage = () => {
  const [selected, setSelected] = useState<Date | undefined>();
  return (
    <div>
      <Calendar
        selected={selected}
        setSelected={setSelected}
        rootClassName="w-fit"
      />
      <p>{selected?.toDateString()}</p>
    </div>
  );
};

export default TenantsPage;
