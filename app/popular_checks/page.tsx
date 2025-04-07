import PremiumChecks from "../components/customComponents/PremiumChecks"
import PopularCars from "../components/homepage/PopularCars"
export default function PopularChecks() {
    return (
        <section className="pt-12 md:pt-16">
            <main className="py-12 md:px-12 lg:px-24">
                <PremiumChecks />
                <div>
                    <PopularCars />
                </div>
            </main>
        </section>
    )
}