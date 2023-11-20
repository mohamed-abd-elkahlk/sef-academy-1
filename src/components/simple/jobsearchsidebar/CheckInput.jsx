import { CheckInputItem } from "./CheckInpuItem";

export const CheckInput = (props) => {
  return (
    <li>
      <div className="ms-3 mb-4 mt-8">{props.jf?.title}</div>
      <div className="flex flex-col justify-start ml-3">
        {props.jf?.subtitles.map((e) => (
          <CheckInputItem title="Remote" key={e} jobFilterItem={e} />
        ))}
      </div>
    </li>
  );
};
