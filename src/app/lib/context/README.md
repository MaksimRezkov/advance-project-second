1. Объект контекста создаётся с пустым исходным значением value объекта компонента Provider.
2. Создаётся значение переменной контекста (объект ThemeContextValue), значения полей в ThemeContextValue это данные из стейта компонента ContextProvider;
3. Ссылка на ThemeContextValue передаётся в поле value объекта компонента Provider, полученного из объекта контекста;
4. Через useThemeContext какие либо компоненты исползуют useContext и получают значение контекста ThemeContextValue.

Ререндер при изменении данных в контексте.
1. В каком либо компоненте изменяем данные в значении контекста (через setThemeValue меняем themeValue);
2. Т.к. это данные из стейта компонента ContextProvider, он ререндерится, обновляется значение ThemeContextValue;
3. В объекте компонента Provider обновляется поле value;
4. Т.к. обновляется значение value в провайдере, вызывается ререндер всех компонентов, которые используют это поле (через хук useContext);