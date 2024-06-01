import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meal-grid";
import getMeals from "@/lib/meals";
import React, {Suspense} from "react";

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals}/>

}

export default async function MealsPage() {

    return <>
        <header className={classes.header}>
            <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
            <p>choose your favorite recipe and enjoy</p>
            <p className={classes.cta}>
                <Link href="/meals/share">Share your favorite meal</Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}><Meals/></Suspense>

        </main>
    </>
}