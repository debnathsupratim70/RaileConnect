interface ContactDetailsProps {
  mobile: string;
  email: string;
  onMobileChange: (value: string) => void;
  onEmailChange: (value: string) => void;
}

function ContactDetails({
  mobile,
  email,
  onMobileChange,
  onEmailChange,
}: ContactDetailsProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-slate-800">
        Contact Details
      </h2>

      <div className="space-y-5">
        <div>
          <label className="mb-2 block font-medium">
            Mobile Number
          </label>

          <input
            type="tel"
            value={mobile}
            onChange={(e) =>
              onMobileChange(e.target.value)
            }
            placeholder="Enter mobile number"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              onEmailChange(e.target.value)
            }
            placeholder="Enter email address"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;