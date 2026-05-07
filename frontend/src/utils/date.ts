import {format, getHours, getMinutes, isThisHour, isToday} from "date-fns"

export const formatRecentDate = (date: string | Date) => {
    if (isToday(date)){
        if (isThisHour(date)) {
            return `${getMinutes(date)}m ago`;
        }else{
            return `${getHours(date)}h ago`;
        }
    } else {
        return format(date, "MMM d");
    }
}