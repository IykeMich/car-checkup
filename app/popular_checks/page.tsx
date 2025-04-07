import PremiumChecks from "../components/customComponents/PremiumChecks"
import PopularCars from "../components/homepage/PopularCars"
export default function PopularChecks() {
    return (
        <section className="pt-12 md:pt-16">
            <main className="py-12 md:px-12 lg:px-24">
                <div className="px-4 md:px-0">
                <PremiumChecks />

                </div>
                <div>
                    <PopularCars />
                </div>
            </main>
        </section>
    )
}