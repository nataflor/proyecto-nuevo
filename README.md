# proyecto-nuevo


# 🚀 Plataforma Algorítmica: Sucesión de Fibonacci y Números Primos en la Vida Real

Bienvenido al repositorio oficial de la **Plataforma Algorítmica Interactiva**. Este proyecto ha sido diseñado con el propósito de demostrar cómo las estructuras y patrones de la matemática pura —específicamente la **Sucesión de Fibonacci** y la **Teoría de Números Primos**— proveen soluciones óptimas, predecibles y altamente eficientes a problemáticas complejas del mundo real.

A través de una interfaz web dinámica y responsiva, la aplicación modela tres escenarios analíticos donde se prioriza el rendimiento del sistema mediante el uso de **bucles puros y rotación lineal de variables**, erradicando por completo el almacenamiento masivo en memoria (sin el uso de arrays o matrices) y garantizando una complejidad algorítmica óptima.

---

## 🔗 Enlaces de Control del Proyecto

* **Acceso al Código Fuente (Repositorio Git):** https://github.com/nataflor/proyecto-nuevo.git
* **Acceso a la Aplicación Desplegada (GitHub Pages):** https://nataflor.github.io/proyecto-nuevo/
---

## 📚 Documentación Completa de los Módulos de Simulación

A continuación, se detalla toda la fundamentación teórica, matemática, lógica y los algoritmos abstractos que estructuran y dan vida a cada sección de la plataforma interactiva:

### 💰 MÓDULO 1: Planificación Financiera y Ahorro Progresivo (Fibonacci)

#### 📋 1. Justificación y Selección del Problema Real
El desarrollo de una cultura de ahorro permanente en la sociedad actual suele verse afectado por la rigidez de las cuotas fijas o la falta de esquemas dinámicos que se adapten a la capacidad económica incremental del usuario. Al aplicar la secuencia de Fibonacci al presupuesto personal, se establece un modelo de ahorro escalonado. En este esquema, cada depósito mensual se calcula en base al esfuerzo financiero de los dos meses anteriores, optimizando la acumulación de capital de forma orgánica y acompañando el progreso financiero del usuario sin desestabilizar su economía diaria.

#### 🧬 2. Fundamentación Matemática del Algoritmo
La sucesión de Fibonacci opera bajo una regla de recurrencia lineal donde cada término posterior representa la suma algebraica de sus dos antecesores inmediatos, matemáticamente definida como:
$$F_n = F_{n-1} + F_{n-2}$$
Con los valores iniciales fijos de $F_1 = 1$ y $F_2 = 1$. Para proyectar la acumulación del saldo global mes a mes, el algoritmo procesa iterativamente este comportamiento sumando dinámicamente el valor de cada nuevo periodo dentro de una variable contadora acumulativa, lo que permite conocer el estado neto de la alcancía en cualquier punto de la línea temporal.

#### ⚙️ 3. Desglose del Procedimiento Lógico (Paso a Paso)
* **Paso 1: Inicialización de Variables Base:** Se definen los dos primeros términos del ahorro correspondientes al mes 1 y mes 2 con un valor base de Bs. 1, configurando la alcancía acumuladora general en cero.
* **Paso 2: Ejecución del Bucle Iterativo Continuo:** Un ciclo controlado por el usuario (`for`) calcula el nuevo depósito rotando los valores en el tiempo mediante una variable de apoyo temporal y añade el saldo resultante al acumulador general en cada ciclo.
* **Paso 3: Renderizado y Despliegue de Resultados:** El proceso finaliza al alcanzar el límite estricto de meses ingresado por el usuario, inyectando un desglose histórico cronológico en una cuadrícula visual y reflejando el balance total acumulado en la interfaz.

#### 🧠 4. Representación del Algoritmo (Pseudocódigo)
``` text
Algoritmo PlanificacionFibonacci
    Leer meses
    actual <- 1
    anterior <- 0
    temporal <- 0
    sumaAcumulada <- 0
    Para i <- 1 Hasta meses Con Paso 1 Hacer
        Si i = 1 Entonces
            sumaAcumulada <- sumaAcumulada + actual
        Sino
            temporal <- actual + anterior
            anterior <- actual
            actual <- temporal
            sumaAcumulada <- sumaAcumulada + anterior
        FinSi
        Imprimir "Mes: ", i, " Depósito: ", anterior, " Acumulado: ", sumaAcumulada
    FinPara
FinAlgoritmo
```
🔐 MÓDULO 2: Tokens y Seguridad Informática (Números Primos)

#### 📋 1. Justificación y Selección del Problema Real
Los entornos digitales modernos, las transacciones bancarias y los sistemas de autenticación requieren validar de forma infalible la integridad de códigos de acceso y llaves de seguridad para prevenir intrusiones o alteraciones de identidad. La criptografía moderna se apoya fuertemente en las propiedades de exclusividad de los números primos. Este módulo actúa como un filtro de ciberseguridad que audita la estructura matemática de un token numérico ingresado por el usuario para dictaminar si es vulnerable (compuesto) o altamente resistente (primo) ante ataques informáticos de descifrado.

#### 🧬 2. Fundamentación Matemática del Algoritmo
Un número entero positivo se define como primo si y solo si posee exactamente dos divisores positivos: la unidad (1) y él mismo. El algoritmo implementado utiliza una operación de descarte por residuo aritmético mediante el operador de módulo (`%`). Si el sistema localiza un divisor exacto intermedio (donde el residuo de la división sea estrictamente cero) dentro del rango completo de evaluación, el número pierde inmediatamente su condición de primalidad y se clasifica como número compuesto.

#### ⚙️ 3. Desglose del Procedimiento Lógico (Paso a Paso)
* **Paso 1: Validación y Exclusión Inicial:** El programa infraestructura el código de entrada y descarta el número 1, debido a que las especificaciones criptográficas internacionales exigen valores mayores para ser considerados estructuras seguras.
* **Paso 2: Bucle de Inspección de Residuos:** Se arranca un ciclo repetitivo que divide el token en forma de residuos sucesivos entre todos los enteros comprendidos entre el 1 y el valor exacto del número ingresado.
* **Paso 3: Evaluación de Divisores y Dictamen:** Un condicional cuenta cuántas divisiones resultaron exactas. Si el contador final es estrictamente igual a 2, se aprueba el token con Grado de Seguridad Alto; si es mayor, se declara compuesto e inseguro con Riesgo de Filtración. Además, el sistema calcula y expone las equivalencias del token en sistemas binario y hexadecimal para el análisis de bajo nivel.

#### 🧠 4. Representación del Algoritmo (Pseudocódigo)
``` text
Algoritmo AuditoriaPrimalidad
    Leer num
    Si num = 1 Entonces
        Imprimir "Token Inseguro por definición"
    Sino
        divisoresExactos <- 0
        Para i <- 1 Hasta num Con Paso 1 Hacer
            Si num Mod i = 0 Entonces
                divisoresExactos <- divisoresExactos + 1
            FinSi
        FinPara
        Si divisoresExactos = 2 Entonces
            Imprimir "Token Seguro - Es Número Primo"
        Sino
            Imprimir "Token Vulnerable - Es Número Compuesto"
        FinSi
    FinSi
FinAlgoritmo
```

### 🧬 MÓDULO 3: Filtrado Estructural Cripto-Evolutivo (Fibonacci + Primos)

#### 📋 1. Justificación y Selección del Problema Real
En los campos de las telecomunicaciones avanzadas y la generación de llaves criptográficas asimétricas, el uso de secuencias numéricas simples o predecibles puede resultar vulnerable ante algoritmos maliciosos de machine learning o fuerza bruta. Combinar dos ramas independientes de la teoría de números incrementa exponencialmente la complejidad lógica de los patrones resultantes. Este sistema genera de manera consecutiva la cadena evolutiva de Fibonacci y le aplica simultáneamente una auditoría de seguridad en tiempo real para aislar única y exclusivamente aquellos valores que posean una naturaleza prima, creando un flujo de datos dinámico de alta seguridad.

#### 🧬 2. Fundamentación Matemática del Algoritmo
El módulo procesa una intersección de conjuntos numéricos en tiempo real. En primera instancia, computa de forma secuencial cada término perteneciente a la sucesión de Fibonacci empleando la rotación de variables simples. En segunda instancia y de manera anidada, cada término calculado es enviado inmediatamente a un sub-filtro de residuos que comprueba su divisibilidad, sumando factores únicamente cuando el residuo es cero. Si el término de Fibonacci actual posee exactamente dos divisores, es aislado y concatenado en el conjunto solución; de lo contrario, es descartado.

#### ⚙️ 3. Desglose del Procedimiento Lógico (Paso a Paso)
* **Paso 1: Captura del Límite de Expansión:** Se define la cantidad total de términos de la sucesión de Fibonacci que se van a generar e inspeccionar consecutivamente dentro del motor del programa.
* **Paso 2: Generación e Inspección Simultánea:** El ciclo principal calcula el término de Fibonacci correspondiente y, de forma asincrónica, un bucle anidado interno verifica mediante residuos si dicho valor tiene divisores intermedios, determinando su primalidad sobre la marcha.
* **Paso 3: Concatenación Lineal y Salida:** Los números que superan exitosamente ambas pruebas matemáticas se van uniendo en una cadena limpia y estructurada. El DOM renderiza tarjetas visuales diferenciadas: tarjetas grandes verdes resaltadas para los eslabones primos validados y tarjetas pequeñas atenuadas para los elementos compuestos descartados.

#### 🧠 4. Representación del Algoritmo (Pseudocódigo)
```text
Algoritmo FiltradoInterseccional
    Leer terminos
    actual <- 1
    anterior <- 0
    temporal <- 0
    Para i <- 1 Hasta terminos Con Paso 1 Hacer
        Si i = 1 Entonces
            valorEvaluar <- actual
        Sino Si i = 2 Entonces
            temporal <- actual + anterior
            anterior <- actual
            actual <- temporal
            valorEvaluar <- anterior
        Sino
            temporal <- actual + anterior
            anterior <- actual
            actual <- temporal
            valorEvaluar <- anterior
        FinSi
        
        divisores <- 0
        Para j <- 1 Hasta valorEvaluar Con Paso 1 Hacer
            Si valorEvaluar Mod
