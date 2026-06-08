import Title from "@/components/atoms/titles";

export default function TitleCorporation() {
    
    const name1 = 'BIM';
    const name2 = 'CONSTRUCTIONS';
    
    return (
        <div className="flex flex-col justify-center">
            <Title
                level="h2"
                weight="bold"
                variant="primary"
                className="font-bebas text-2xl leading-none tracking-wide"
                text={name1}
            />
            <Title
                level="h3"
                variant="secondary"
                className="font-bebas text-lg leading-none tracking-widest"
                weight="normal"
                text={name2}
            />
        </div>
    )
}