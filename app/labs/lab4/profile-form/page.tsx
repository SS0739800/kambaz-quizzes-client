import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";

export default function ProfileFormsPage() {
  return (
    <div id="wd-lab4-profile-forms" className="flex flex-col gap-8 p-4">
      <h2>Profile Form: useState, Context, and Zustand</h2>
      <ProfileForm />
      <ContextProfileForm />
      <ZustandProfileForm />
    </div>
  );
}
