export default function SpecItem({
    title,
    value,
    icon = "/assets/icons/detail/ic-bed.svg",
}) {
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-2">
                <img src={icon} alt="" />
                <p className="font-normal">{title}</p>
            </div>
            <p className="font-bold">{value}</p>
        </div>
    );
}