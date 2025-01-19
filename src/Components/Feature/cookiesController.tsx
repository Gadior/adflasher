/*
~ toCookies
Используется для ситуация с односложным именем, где в качестве имени лучше указать название хука, который отвечает за состояние переключаемого объекта
К примеру, у tabs есть activeTab, которому можно указать значение и будет включена вкладка. 
В этом случае значение храниться в хуке, а процесс сохранения хука и одновременна стейта выглядит так:
setActiveTab(toCookies("activeTab", value)); // где value - значение вкладки внутри функции onChange
~ toCookies
Используется для ситуаций где состояния хука храняться в виде объекта. К примеру, как множество фильтров (чекбоксы)
Переменные функции:
- filterData: хук в котором храниться значение в виде объекта
- "filters": string - название для куки, точно такое же как и хук в пупнке 1
- "filter1": string - название ключа внутри объекта, в котором храниться значение для фильтра
- e.target.checked: состояние, которое отражает фильтр. К примеру, true/false для чекбокс
setFilters(toCookies_obj(filters,"filters","filter1",e.target.checked));
~ Загрузка
Производиться через переопределение хуков внутри useEffect. Если значение в cookies есть, то переопределяем хук, иначе работаем с тем, что было
// состояние для табов
const [activeTab, setActiveTab] = useState<string>("1");
// для групп boolean состояний
const [filters, setFilters] = useState<boolean[]>({
filter1: false,
filter2: false,
});
useEffect(() => {
    // ~ получить cookies
    const __tabs = cookies.get("activeTab");
    const __filters: object = cookies.get("filters");
    // ~ если они есть - сохранить в переменные
    if (__tabs) setActiveTab(__tabs.toString());
    if (__filters) setFilters(__filters);
  }, []);
*/

import Cookies from "universal-cookie";
const cookies = new Cookies(null, { path: "/" });

// ~ Сохраняем cookie тип... name/key
export const toCookies = (hookName: string, key: string) => {
  cookies.set(hookName, key);
  return key;
};

// ~ Сохраняем cookie тип... name/object
export const toCookies_obj = (
  filterData: object,
  hookName: string,
  filterName: string,
  value: boolean
) => {
  let newFilters = { ...filterData, [filterName]: value };
  cookies.set(hookName, newFilters);
  return newFilters;
};
