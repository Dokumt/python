function visible(cursor)
{
    cursor.classList.toggle("active");
    cursor.classList.toggle("inactive");

    //относительно курсора ищем родительский блок с классом hideContainer,
    //после в блоке с классом hide добавляем/убираем класс hidden
    cursor.closest(".hideContainer").querySelector(".hide").classList.toggle("hidden");
}