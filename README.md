# proyecto-nuevo

# 🚀 Plataforma Algorítmica: Sucesión de Fibonacci y Números Primos en la Vida Real

Bienvenido al repositorio oficial de la **Plataforma Algorítmica Interactiva**. Este proyecto ha sido diseñado con el propósito de demostrar cómo las estructuras y patrones de la matemática pura —específicamente la **Sucesión de Fibonacci** y la **Teoría de Números Primos**— proveen soluciones óptimas, predecibles y altamente eficientes a problemáticas complejas del mundo real.

A través de una interfaz web dinámica y responsiva, la aplicación modela tres escenarios analíticos donde se prioriza el rendimiento del sistema mediante el uso de **bucles puros y rotación lineal de variables**, erradicando por completo el almacenamiento masivo en memoria (sin el uso de arrays o matrices) y garantizando una complejidad algorítmica óptima.

---

## 🔗 Enlaces de Control del Proyecto

* **Acceso al Código Fuente (Repositorio Git):** https://github.com/nataflor/desafio-2-matematico
* **Acceso a la Aplicación Desplegada (GitHub Pages):** https://nataflor.github.io/desafio-2-matematico/

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
1. **Inicialización de Variables Base:** Se definen los dos primeros términos del ahorro correspondientes al mes 1 y mes 2 con un valor base de Bs. 1, configurando la alcancía acumuladora general en cero.
2. **Ejecución del Bucle Iterativo Continuo:** Un ciclo controlado por el usuario (`for`) calcula el nuevo depósito rotando los valores en el tiempo mediante una variable de apoyo temporal y añade el saldo resultante al acumulador general en cada ciclo.
3. **Renderizado y Despliegue de Resultados:** El proceso finaliza al alcanzar el límite estricto de meses ingresado por el usuario, inyectando un desglose histórico cronológico en una cuadrícula visual y reflejando el balance total acumulado en la interfaz.

#### 🧠 4. Representación del Algoritmo (Pseudocódigo)
```text
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
