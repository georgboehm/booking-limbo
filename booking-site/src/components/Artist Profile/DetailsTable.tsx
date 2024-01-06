const DetailsTable: React.FC<{}> = () => {
  const djDetails = {
    Genre: "Techno/Trance",
    "BPM Comfort Zone": "150-170 BPM",
    "Preferred Setting": "Private Events, Clubs",
    "Played At": "Tilt, Haus am See, private events",
  };

  return (
    <table className="w-full border-collapse border border-gray-300">
      <tbody>
        {Object.entries(djDetails).map(([attribute, value]) => (
          <tr key={attribute}>
            <td className="border border-gray-300 p-2 font-semibold">
              {attribute}
            </td>
            <td className="border border-gray-300 p-2">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DetailsTable;
