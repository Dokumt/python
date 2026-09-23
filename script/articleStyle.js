//устанавливаем классы для первого и последнего абзацев на всей странице целиком
const allArticles = document.querySelectorAll('article');

if (allArticles.length > 0)
{
    allArticles[0].classList.add("global-first-article");

    allArticles[allArticles.length - 1].classList.add("global-last-article");
}