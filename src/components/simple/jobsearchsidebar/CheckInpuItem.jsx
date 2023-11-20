export const CheckInputItem = (props) => {
  return (
    <label className="inline-flex items-center mb-3">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
      <span className="ml-2">{props.jobFilterItem}</span>
    </label>
  );
};
