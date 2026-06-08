import Link from "next/link";
import Button from "@/components/atoms/buttons";
import { MailIcon } from "@/components/atoms/icons";

export default function BtnContactanos({ className = "", onClick }) {
    return (
        <div className={className}>
            <Link href="/contact" onClick={onClick}>
                <Button
                    variant="primary"
                    size="md"
                    className="w-full justify-center cursor-pointer font-montserrat font-semibold shadow-md hover:shadow-lg"
                    text="Contáctanos"
                    leftIcon={<MailIcon />}
                />
            </Link>
        </div>
    )
}