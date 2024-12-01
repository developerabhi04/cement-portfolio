import moment from "moment";

export const getLast7Days = () => {
    const currentDate = moment();

    const last7Days = [];

    for (let i = 0; i < 7; i++) {
        const dayDate = currentDate.clone().subtract(i, "days");
        const dayName = dayDate.format("dddd");

        last7Days.unshift(dayName);
    }

    return last7Days;
}