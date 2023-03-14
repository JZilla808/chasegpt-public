"use client";

import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading, error } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  const options = [models];

  return (
    <div className="mt-2">
      <Select
        options={models?.modelOptions}
        className="mt-2"
        classNames={{ control: (state) => "bg-[#434654] border-[#434654]" }}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}

export default ModelSelection;
