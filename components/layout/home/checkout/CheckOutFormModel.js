import { Input, Textarea } from "@material-tailwind/react";

const CheckOutFormModel = ({ data, setData }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <Input
          label="Full Name"
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <Input
          label="Phone Number"
          variant="outlined"
          value={data.phoneNumber}
          onChange={(e) =>
            setData((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <Input
          label="Email"
          variant="outlined"
          value={data.email}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <Input
          label="City"
          variant="outlined"
          value={data.city}
          onChange={(e) =>
            setData((prev) => ({ ...prev, city: e.target.value }))
          }
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <Input
          label="State"
          variant="outlined"
          value={data.state}
          onChange={(e) =>
            setData((prev) => ({ ...prev, state: e.target.value }))
          }
        />
        <Input
          label="Pincode"
          variant="outlined"
          value={data.pincode}
          onChange={(e) =>
            setData((prev) => ({ ...prev, pincode: e.target.value }))
          }
        />
      </div>
      <Textarea
        label="Address"
        value={data.address}
        onChange={(e) =>
          setData((prev) => ({ ...prev, address: e.target.value }))
        }
      />
    </div>
  );
};

export default CheckOutFormModel;
