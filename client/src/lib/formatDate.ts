export const formatDate = (date: string): string => {
 const formatDate = new Date(date);
 return formatDate.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric"
 })
}