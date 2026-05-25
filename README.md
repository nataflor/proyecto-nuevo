# proyecto-nuevo

# 🚀 Plataforma Algorítmica: Sucesión de Fibonacci y Números Primos en la Vida Real

**Estudiante:** Flores Mercado Natalia Monica

Bienvenido al repositorio oficial de la **Plataforma Algorítmica Interactiva**. Este proyecto ha sido diseñado con el propósito de demostrar cómo las estructuras y patrones de la matemática pura,específicamente la **Sucesión de Fibonacci** y la **Teoría de Números Primos** que proveen soluciones óptimas, predecibles y altamente eficientes a problemáticas complejas del mundo real.

A través de una interfaz web dinámica y responsiva, la aplicación modela tres escenarios analíticos donde se prioriza el rendimiento del sistema mediante el uso de **bucles puros y rotación lineal de variables**, erradicando por completo el almacenamiento masivo en memoria (sin el uso de arrays o matrices) y garantizando una complejidad algorítmica óptima.

---

## 🔗 Enlaces de Control del Proyecto

* **Acceso al Código Fuente (Repositorio Git):** https://github.com/nataflor/proyecto-nuevo.git
* **Acceso a la Aplicación Desplegada (GitHub Pages):** https://nataflor.github.io/proyecto-nuevo/

---

## 📚 Documentación Completa de los Módulos de Simulación

### 💰 MÓDULO 1: Planificación Financiera y Ahorro Progresivo (Fibonacci)

#### 📋 1. Justificación y Selección del Problema Real
El desarrollo de una cultura de ahorro permanente suele verse afectado por la rigidez de las cuotas fijas. Al aplicar la secuencia de Fibonacci al presupuesto personal, se establece un modelo de ahorro escalonado que acompaña el progreso financiero del usuario.

#### 🧬 2. Fundamentación Matemática del Algoritmo
La sucesión de Fibonacci opera bajo una regla de recurrencia lineal definida como: $$F_n = F_{n-1} + F_{n-2}$$

#### ⚙️ 3. Desglose del Procedimiento Lógico (Paso a Paso)
* **Paso 1:** Inicialización de variables base (mes 1 y 2 con valor 1).
* **Paso 2:** Ejecución de ciclo para calcular el depósito mediante rotación de variables.
* **Paso 3:** Renderizado de resultados cronológicos mediante `document.getElementById()`.

#### 🧠 4. Representación del Algoritmo 
```text
Algoritmo PlanificacionFibonacci
    Leer meses
    actual <- 1; anterior <- 0; sumaAcumulada <- 0
    Para i <- 1 Hasta meses Con Paso 1 Hacer
        Si i = 1 Entonces sumaAcumulada <- sumaAcumulada + actual
        Sino
            temporal <- actual + anterior
            anterior <- actual; actual <- temporal
            sumaAcumulada <- sumaAcumulada + anterior
        FinSi
        Imprimir "Mes: ", i, " Depósito: ", anterior, " Acumulado: ", sumaAcumulada
    FinPara
FinAlgoritmo
```

### 🔐 MÓDULO 2: Tokens y Seguridad Informática (Números Primos)

#### 📋 1. Justificación y Selección del Problema Real

Los entornos digitales modernos, las transacciones bancarias y los sistemas de autenticación requieren validar de forma infalible la integridad de códigos de acceso y llaves de seguridad para prevenir intrusiones o alteraciones de identidad. La criptografía moderna se apoya fuertemente en las propiedades de exclusividad de los números primos. Este módulo actúa como un filtro de ciberseguridad que audita la estructura matemática de un token numérico ingresado por el usuario para dictaminar si es vulnerable (compuesto) o altamente resistente (primo) ante ataques informáticos de descifrado.

#### 🧬 2. Fundamentos Matemáticos del Algoritmo

Un número entero positivo se define como primo si y solo si posee exactamente dos divisores positivos: la unidad (1) y él mismo. El algoritmo implementado utiliza una operación de descarte por residuo aritmético mediante el operador de módulo (%). Si el sistema localiza un divisor exacto intermedio (donde el residuo de la división sea estrictamente cero) dentro del rango completo de evaluación, el número pierde inmediatamente su condición de primalidad y se clasifica como número compuesto.

#### ⚙️ 3. Desglose del Procedimiento Lógico (Paso a Paso)

* **Paso 1: Validación y Exclusión Inicial:** El programa infraestructura el código de entrada y descarta el número 1, debido a que las especificaciones criptográficas internacionales exigen valores mayores para ser consideradas estructuras seguras.
* **Paso 2: Bucle de Inspección de Residuos:** Se arranca un ciclo repetitivo que divide el token en forma de residuos sucesivos entre todos los enteros comprendidos entre el 1 y el valor exacto del número ingresado.
* **Paso 3: Evaluación de Divisores y Dictamen:** Un condicional cuenta cuántas divisiones resultaron exactas. Si el contador final es estrictamente igual a 2, se aprueba el token con Grado de Seguridad Alto; si es mayor, se declara compuesto e inseguro con Riesgo de Filtración. Además, el sistema calcula y expone las equivalencias del token en sistemas binarios y hexadecimales para el análisis de bajo nivel.

#### 🧠 4. Representación del Algoritmo 

```text
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

En los campos de las telecomunicaciones avanzadas y la generación de llaves criptográficas asimétricas, el uso de secuencias numéricas simples o predecibles puede resultar vulnerable ante algoritmos maliciosos de aprendizaje automático o fuerza bruta. Combinar dos ramas independientes de la teoría de números incrementa exponencialmente la complejidad lógica de los patrones resultantes. Este sistema genera de manera consecutiva la cadena evolutiva de Fibonacci y le aplica simultáneamente una auditoría de seguridad en tiempo real para aislar única y exclusivamente aquellos valores que poseen una naturaleza prima, creando un flujo de datos dinámico de alta seguridad.

#### 🧬 2. Fundamentos Matemáticos del Algoritmo

El módulo procesa una intersección de conjuntos numéricos en tiempo real. En primera instancia, computa de forma secuencial cada término perteneciente a la sucesión de Fibonacci empleando la rotación de variables simples. En segunda instancia y de manera anidada, cada término calculado es enviado inmediatamente a un subfiltro de residuos que comprueba su divisibilidad, sumando factores únicamente cuando el residuo es cero. Si el término de Fibonacci actual posee exactamente dos divisores, es aislado y concatenado en el conjunto solución; de lo contrario, es descartado.

#### ⚙️ 3. Desglose del Procedimiento Lógico (Paso a Paso)

* **Paso 1: Captura del Límite de Expansión:** Se define la cantidad total de términos de la sucesión de Fibonacci que se van a generar e inspeccionar consecutivamente dentro del motor del programa.
* **Paso 2: Generación e Inspección Simultánea:** El ciclo principal calcula el término de Fibonacci correspondiente y, de forma asincrónica, un bucle anidado interno verifica mediante residuos si dicho valor tiene divisores intermedios, determinando su primalidad sobre la marcha.
* **Paso 3: Concatenación Lineal y Salida:** Los números que superan exitosamente ambas pruebas matemáticas se van uniendo en una cadena limpia y estructurada. El DOM renderiza tarjetas visuales diferenciadas: tarjetas grandes verdes resaltadas para los eslabones primos validados y tarjetas pequeñas atenuadas para los elementos compuestos descartados.

#### 🧠 4. Representación del Algoritmo 

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
            Si valorEvaluar Mod j = 0 Entonces
                divisores <- divisores + 1
            FinSi
        FinPara
        
        Si divisores = 2 Entonces
            Imprimir valorEvaluar, " es Primo (Aceptado)"
        Sino
            Imprimir valorEvaluar, " no es Primo (Descartado)"
        FinSi
    FinPara
FinAlgoritmo
```

---

## 🛠️ Estructura del Proyecto
```text
proyecto-nuevo/
├── index.html          # Estructura de la página
├── css/estilos.css      # Diseño responsivo
└── js/script.js         # Lógica con document.getElementById()
