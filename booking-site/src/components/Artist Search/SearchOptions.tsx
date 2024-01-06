import { Controller, SubmitHandler, useForm } from "react-hook-form";
import BPMSlider from "./BPMSlider";
import Button from "../Base components/Button";
import { EVENT_TYPES, GENRES } from "../../constants/SEARCHOPTIONS";
import { useNavigate } from "react-router";

export type SearchOptionsForm = {
  genre: string;
  bpmRange: number[];
  eventType: string;
};

const SearchOptions: React.FC<{}> = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SearchOptionsForm>({
    defaultValues: {
      genre: GENRES[0],
      bpmRange: [120, 150],
      eventType: EVENT_TYPES[0],
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SearchOptionsForm> = (
    data: SearchOptionsForm
  ) => {
    navigate(
      `/browse?genre=${data.genre}&bpm_low=${data.bpmRange[0]}&bpm_high=${data.bpmRange[1]}&event_type=${data.eventType}`
    );
  };

  return (
    <div className="w-full">
      <div className="mt-10">
        <form>
          <div>
            <div className="p-4">
              <div className="mb-4 text-white font-sans font-bold">Genre</div>
              <Controller
                control={control}
                name={"genre"}
                render={({ field: { onChange, value } }) => {
                  return (
                    <select
                      value={value}
                      onChange={onChange}
                      className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none"
                    >
                      {GENRES.map((genre, index) => (
                        <option key={index} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                  );
                }}
              />
            </div>
            <div className="p-4">
              <div className="mb-4 text-white font-sans font-bold">
                Beats per minute
              </div>
              <Controller
                control={control}
                name={"bpmRange"}
                render={({ field: { onChange, value } }) => {
                  return (
                    <BPMSlider onChange={onChange} value={value as number[]} />
                  );
                }}
              />
            </div>
            <div className="p-4">
              <div className="mb-4 text-white font-sans font-bold">
                Event type
              </div>
              <div>
                <Controller
                  control={control}
                  name={"eventType"}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <select
                        value={value}
                        onChange={onChange}
                        className="border border-gray-300 bg-white text-gray-900 appearance-none block w-full rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none"
                      >
                        {EVENT_TYPES.map((eventType, index) => (
                          <option key={index} value={eventType}>
                            {eventType}
                          </option>
                        ))}
                      </select>
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="justify-center flex mt-10 mb-10">
        <Button type="primary" text="Search" onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default SearchOptions;
