import { Suspense } from "react";
import Deal from "../Components/Deal/Deal";// adjust the path as needed

export default function Page() {
  return (
    <Suspense fallback={<div>Loading Deal Page...</div>}>
      <Deal />
    </Suspense>
  );
}
