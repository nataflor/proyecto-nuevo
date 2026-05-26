function mostrarProblema(idCaso) {
    document.getElementById('pantallaMenu').classList.add('oculto');
    document.getElementById('contenedorProblemas').classList.remove('oculto');
    
    document.getElementById('caso1').classList.add('oculto');
    document.getElementById('caso2').classList.add('oculto');
    document.getElementById('caso3').classList.add('oculto');
    
    document.getElementById(idCaso).classList.remove('oculto');
}

function volverAlMenu() {
    document.getElementById('contenedorProblemas').classList.add('oculto');
    document.getElementById('pantallaMenu').classList.remove('oculto');
}

document.getElementById('btnAhorro').addEventListener('click', procesarAhorro);
document.getElementById('btnSeguridad').addEventListener('click', procesarSeguridad);
document.getElementById('btnCombinado').addEventListener('click', procesarCombinado);

function procesarAhorro() {
    const contenedor = document.getElementById('resAhorro');
    const entrada = document.getElementById('mesesAhorro').value;
    const meses = parseInt(entrada);

    if (isNaN(meses) || meses < 1) {
        contenedor.innerHTML = '<span class="estado-espera" style="color: #ef4444;">❌ Error: Ingrese un periodo de meses válido.</span>';
        return;
    }

    let actual = 1;
    let anterior = 0;
    let temporal = 0;
    let sumaAcumulada = 0;
    let htmlGrid = '<div class="bloque-cuadrado-grid">';

    for (let i = 1; i <= meses; i++) {
        let depositoMes = 0;

        if (i === 1) {
            depositoMes = actual;
            sumaAcumulada += depositoMes;
            htmlGrid += `
                <div class="tarjeta-resultado-cuadrada" style="border-top: 3px solid #38bdf8;">
                    <div class="linea-principal">📅 Mes 1 de Ahorro</div>
                    <div class="linea-explicativa">💵 Guardas: Bs. ${depositoMes}</div>
                    <div class="linea-explicativa">📝 Análisis lógico: Base inicial fijada para el arranque de la serie financiera.</div>
                    <div class="linea-explicativa">💰 Total ahorrado: Bs. ${sumaAcumulada}</div>
                </div>
            `;
        } else {
            temporal = actual + anterior;
            anterior = actual;
            actual = temporal;
            depositoMes = anterior;
            sumaAcumulada += depositoMes;
            
            let previo1 = actual - anterior;
            let previo2 = anterior - (actual - anterior);
            if (i === 2) { previo1 = 1; previo2 = 0; }

            htmlGrid += `
                <div class="tarjeta-resultado-cuadrada" style="border-top: 3px solid #0ea5e9;">
                    <div class="linea-principal">📅 Mes ${i} de Ahorro</div>
                    <div class="linea-explicativa">💵 Guardas: Bs. ${depositoMes}</div>
                    <div class="linea-explicativa">📝 Análisis lógico: Obtenido de sumar los dos meses previos (Bs. ${previo2} + Bs. ${previo1}).</div>
                    <div class="linea-explicativa">💰 Total ahorrado: Bs. ${sumaAcumulada}</div>
                </div>
            `;
        }
    }

    htmlGrid += `
        <div class="total-destacado">
            🏁 Meta Alcanzada ➔ Fondo de Ahorro Neto Acumulado: Bs. ${sumaAcumulada.toLocaleString()} 🎉
        </div>
    </div>`;

    contenedor.innerHTML = htmlGrid;
}

function procesarSeguridad() {
    const contenedor = document.getElementById('resSeguridad');
    const entrada = document.getElementById('numeroPrimo').value;
    const num = parseInt(entrada);

    if (isNaN(num) || num < 1) {
        contenedor.innerHTML = '<span class="estado-espera" style="color: #ef4444;">❌ Error: Ingrese un código numérico válido.</span>';
        return;
    }

    if (num === 1) {
        contenedor.innerHTML = `
            <div class="caja-matriz-cripto" style="border-color: #f87171;">
                <div class="linea-principal" style="color: #f87171;">⚠️ Token Criptográfico Inseguro / Denegado ⚠️</div>
                <p class="linea-explicativa">El número 1 carece de propiedades criptográficas válidas por definición estándar de seguridad.</p>
            </div>`;
        return;
    }

    let divisoresExactos = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisoresExactos++;
        }
    }

    let binario = num.toString(2);
    let hex = num.toString(16).toUpperCase();

    if (divisoresExactos === 2) {
        contenedor.innerHTML = `
            <div class="caja-matriz-cripto" style="border-color: #4ade80;">
                <div class="linea-principal" style="color: #4ade80;">🔒 Token Validado: ¡Grado de Seguridad Alto! ✅</div>
                <div class="bloque-codigo"><span>Cifrado Binario:</span><span class="clave-verde">${binario}</span></div>
                <div class="bloque-codigo"><span>Cifrado Hexadecimal:</span><span class="clave-azul">0x${hex}</span></div>
                <div class="recuadro-explicativo-destacado">
                    <p>💡 <b>¿Por qué?:</b> El número ${num} es estrictamente PRIMO. Esto significa que solo se puede dividir de manera exacta entre 1 y entre ${num}. Al no tener otros números que lo dividan, los sistemas informáticos lo usan para crear llas secretas imposibles de hackear o adivinar por fuerza bruta.</p>
                </div>
            </div>`;
    } else {
        contenedor.innerHTML = `
            <div class="caja-matriz-cripto" style="border-color: #f87171;">
                <div class="linea-principal" style="color: #f87171;">🔓 Token Vulnerable: ¡Riesgo de Filtración! ❌</div>
                <div class="bloque-codigo"><span>Cifrado Binario:</span><span class="clave-verde">${binario}</span></div>
                <div class="bloque-codigo"><span>Cifrado Hexadecimal:</span><span class="clave-azul">0x${hex}</span></div>
                <div class="recuadro-explicativo-destacado" style="border-color: #f87171;">
                    <p>💡 <b>¿Por qué?:</b> El número ${num} es COMPUESTO porque posee ${divisoresExactos} factores de división exacta en su estructura. Al ser divisible por otros números intermedios, un atacante puede descubrir esos componentes fácilmente y vulnerar el token.</p>
                </div>
            </div>`;
    }
}

function procesarCombinado() {
    const contenedor = document.getElementById('resCombinado');
    const entrada = document.getElementById('terminosCombo').value;
    const terminos = parseInt(entrada);

    if (isNaN(terminos) || terminos < 1) {
        contenedor.innerHTML = '<span class="estado-espera" style="color: #ef4444;">❌ Error: Ingrese un valor válido.</span>';
        return;
    }

    let actual = 1;
    let anterior = 0;
    let temporal = 0;
    let cadenaPrimos = "";
    let htmlGrid = '<div class="bloque-cuadrado-grid">';

    for (let i = 1; i <= terminos; i++) {
        let valorEvaluar = actual;
        let explicacionFibonacci = "";

        if (i === 1) {
            explicacionFibonacci = "Es el primer número de inicio de la serie (fijado en 1).";
        } else if (i === 2) {
            temporal = actual + anterior;
            anterior = actual;
            actual = temporal;
            valorEvaluar = anterior;
            explicacionFibonacci = "Es el segundo número de inicio de la serie (fijado en 1).";
        } else {
            temporal = actual + anterior;
            anterior = actual;
            actual = temporal;
            valorEvaluar = anterior;
            explicacionFibonacci = `Se obtiene sumando los dos términos anteriores de la serie: ${actual - anterior} + ${anterior} = ${valorEvaluar}.`;
        }

        let divisores = 0;
        for (let j = 1; j <= valorEvaluar; j++) {
            if (valorEvaluar % j === 0) {
                divisores++;
            }
        }

        let esPrimo = (divisores === 2);
        let claseTarjeta = esPrimo ? "tarjeta-resultado-cuadrada tarjeta-grande-verde" : "tarjeta-resultado-cuadrada tarjeta-pequena-roja";
        
        let diagnosticoPrimalidad = "";
        if (valorEvaluar === 1) {
            diagnosticoPrimalidad = "❌ <b>Descartado:</b> El número 1 no es primo por regla estándar.";
        } else if (esPrimo) {
            diagnosticoPrimalidad = `✅ <b>¡Es Primo Seguro!:</b> Solo tiene ${divisores} divisores (1 y ${valorEvaluar}).`;
        } else {
            diagnosticoPrimalidad = `❌ <b>Descartado:</b> No es primo porque tiene ${divisores} divisores exactos.`;
        }

        htmlGrid += `
            <div class="${claseTarjeta}">
                <div class="linea-principal">🧬 Posición #${i} ➔ Valor: ${valorEvaluar}</div>
                <div class="linea-explicativa"><b>¿Cómo se sacó?:</b> ${explicacionFibonacci}</div>
                <div class="linea-explicativa"><b>¿Resultado del Filtro?:</b> ${diagnosticoPrimalidad}</div>
            </div>
        `;

        if (esPrimo) {
            if (cadenaPrimos !== "") {
                cadenaPrimos += " ➔ ";
            }
            cadenaPrimos += valorEvaluar;
        }
    }

    if (cadenaPrimos === "") {
        htmlGrid += `
            <div class="total-destacado" style="color: #94a3b8; border-color: #475569;">
                ⚠️ Filtro Terminado: No se detectaron números primos en los términos generados.
            </div>`;
    } else {
        htmlGrid += `
            <div class="total-destacado" style="color: #34d399; border-color: #34d399; background: rgba(52,211,153,0.12);">
                🏁 Cadena Final de Números Primos Aislados: [ ${cadenaPrimos} ] ✨
            </div>`;
    }

    htmlGrid += '</div>';
    contenedor.innerHTML = htmlGrid;
}