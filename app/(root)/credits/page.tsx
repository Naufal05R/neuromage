import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

import Checkout from "@/components/shared/Checkout";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { Suspense } from "react";

const Credits = () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  return (
    <>
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
      />

      <section>
        <ul className="credits-list">
          {plans.map((plan) => (
            <li key={plan.name} className="credits-item">
              <div className="flex-center flex-col gap-3">
                <Image src={plan.icon} alt="check" width={50} height={50} />
                <p className="p-20-semibold mt-2 bg-clip-text text-transparent bg-gradient-sky-blue">
                  {plan.name}
                </p>
                <p className="h1-semibold text-dark-600">${plan.price}</p>
                <p className="p-16-regular">{plan.credits} Credits</p>
              </div>

              {/* Inclusions */}
              <ul className="flex flex-col gap-5 py-9">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/assets/icons/${
                        inclusion.isIncluded ? "check.svg" : "cross.svg"
                      }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p className="p-16-regular">{inclusion.label}</p>
                  </li>
                ))}
              </ul>

              {plan.name === "Free" ? (
                <Button
                  variant="outline"
                  className="w-full rounded-full bg-blue-100 bg-cover text-blue-500 hover:bg-blue-50 hover:text-blue-500"
                >
                  Free Consumable
                </Button>
              ) : (
                <Suspense
                  fallback={
                    <Button
                      disabled
                      type="submit"
                      role="link"
                      className="w-full select-none rounded-full bg-cover bg-gradient-sky-blue"
                    >
                      Buy Credit
                    </Button>
                  }
                >
                  <CheckoutButton plan={plan} userId={userId} />
                </Suspense>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

const CheckoutButton = async ({
  userId,
  plan,
}: {
  userId: string;
  plan: {
    name: string;
    price: number;
    credits: number;
  };
}) => {
  const user = await getUserById(userId);

  return (
    <SignedIn>
      <Checkout
        plan={plan.name}
        amount={plan.price}
        credits={plan.credits}
        buyerId={user._id}
      />
    </SignedIn>
  );
};

export default Credits;
