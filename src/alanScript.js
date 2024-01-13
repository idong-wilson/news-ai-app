intent('$(item* (.+))', (p) => {
    const validCategories = ['sports', 'entertainment', 'business', 'science', 'health', 'technology', 'general'];

    if (validCategories.includes(p.item.value.toLowerCase())) {
        p.play({ command: 'NewsAi', data: p.item.value.toLowerCase() });
        p.play(`Fetching News on ${p.item.value} Category`);
    } else {
        p.play(`Sorry, cannot get news from ${p.item.value}, please try searching for news from a different source.`);
    }
});
