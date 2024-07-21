import React from "react";
import { useTranslation } from "react-i18next";

export default function AvatarSettings({ workspace, setHasChanges }) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-col mb-4">
        <label htmlFor="gender" className="block input-label">
          {t("avatar.gender")}
        </label>
        <select
          name="gender"
          defaultValue={workspace?.avatarSettings?.gender ?? "female"}
          className="bg-zinc-900 text-white text-sm rounded-lg block w-full p-2.5"
          onChange={() => setHasChanges(true)}
        >
          <option value="female">{t("avatar.female")}</option>
          <option value="male">{t("avatar.male")}</option>
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="age" className="block input-label">
          {t("avatar.age")}
        </label>
        <select
          name="age"
          defaultValue={workspace?.avatarSettings?.age ?? "young"}
          className="bg-zinc-900 text-white text-sm rounded-lg block w-full p-2.5"
          onChange={() => setHasChanges(true)}
        >
          <option value="young">{t("avatar.young")}</option>
          <option value="old">{t("avatar.old")}</option>
          <option value="teen">{t("avatar.teen")}</option>
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="accent" className="block input-label">
          {t("avatar.accent")}
        </label>
        <select
          name="accent"
          defaultValue={workspace?.avatarSettings?.accent ?? "american"}
          className="bg-zinc-900 text-white text-sm rounded-lg block w-full p-2.5"
          onChange={() => setHasChanges(true)}
        >
          <option value="american">{t("avatar.american")}</option>
          <option value="pakistani">{t("avatar.pakistani")}</option>
          <option value="british">{t("avatar.british")}</option>
        </select>
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="accentStrength" className="block input-label">
          {t("avatar.accentStrength")}
        </label>
        <select
          name="accentStrength"
          defaultValue={workspace?.avatarSettings?.accentStrength ?? "low"}
          className="bg-zinc-900 text-white text-sm rounded-lg block w-full p-2.5"
          onChange={() => setHasChanges(true)}
        >
          <option value="low">{t("avatar.low")}</option>
          <option value="high">{t("avatar.high")}</option>
        </select>
      </div>
    </div>
  );
}