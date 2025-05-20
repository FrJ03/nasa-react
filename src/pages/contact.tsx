import React from "react";
import { BaseLayout } from "../containers/base-layout";
import { Title } from "../components/title";

const ContactPage = () => {
    return (
        <BaseLayout>
            <section className="flex flex-col w-full mt-4 text-xl place-items-center space-y-3">
                <Title type="h2">Contact Us</Title>
                <span className="p-4 w-3/5 text-lg border-black border-8">Contacta con nosotros a través de <a className="text-blue-700 underline" href="mailto:example@example.com">example@example.com</a></span>
            </section>
        </BaseLayout>
    )
}

export { ContactPage }