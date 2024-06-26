import classes from "./page.module.css";
import Image from "next/image";
import {getMeal} from "@/lib/meals";
import {notFound} from "next/navigation";

export default function MealDetailPage({params}) {
    const meal = getMeal(params.mealSlug)

    if(!meal){
        notFound()
    }

    meal.instructions = meal.instructions.replaceAll(/\n/g, '<br />');
    return <div>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image alt={meal.title} src={meal.image} fill></Image>
            </div>
            <div className={classes.headerText}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <p className={classes.summary}>{meal.summary}</p>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}></p>

        </main>

    </div>
}

