"use client";
import CustomError from "../packages/components/custome-error";

export default function Custom404() {
  return (
    <CustomError
      header="404 - Page Not Found"
      href="/expenses"
      subHeader="The page you were looking for doesn't exist."
    />
  );
}
