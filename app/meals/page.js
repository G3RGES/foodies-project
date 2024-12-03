import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, made{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p className="">
          Choose your favorite recipe, and cook it yourself. it&apos;s easy and
          fun
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipes</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
