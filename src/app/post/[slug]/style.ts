import styled from "@emotion/styled";

export const Container = styled.div`

.post-container {



    max-width: 800px; /* Largura máxima para o post */
    margin: 20px auto; /* Centraliza o post */
    padding: 20px; /* Espaço interno */
    background-color: #fff; /* Fundo branco */
    border-radius: 8px; /* Bordas arredondadas */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */

    .post-title {
        font-size: 2.5em; /* Tamanho da fonte do título */
        margin-bottom: 10px; /* Espaço abaixo do título */
    }
    
    .post-intro {
        font-size: 1.2em; /* Tamanho da fonte da introdução */
        margin-bottom: 20px; /* Espaço abaixo da introdução */
        color: #666; /* Cor do texto da introdução */
    }
    
    .post-heading {
        font-size: 1.2em; /* Tamanho da fonte dos subtítulos */
        margin-top: 30px; /* Espaço acima dos subtítulos */
        margin-bottom: 10px; /* Espaço abaixo dos subtítulos */
        border-bottom: 2px solid #eaeaea; /* Linha abaixo do subtítulo */
        padding-bottom: 10px; /* Espaço interno abaixo do subtítulo */
        font-weight: bold;
    }
    
    .post-paragraph {
        margin-bottom: 20px; /* Espaço entre parágrafos */
    }
    
    pre {
        gap: 8px;
        background-color: #f5f5f5; /* Cor de fundo dos códigos */
        /* border: 1px solid #ddd;  */
        border-radius: 5px; /* Bordas arredondadas */
        padding: 6px 8px; /* Espaçamento interno */
        overflow-x: auto; /* Permitir rolagem horizontal se necessário */
        font-family: 'Courier New', monospace; /* Fonte monoespaçada */
        white-space: pre; /* Preservar espaços em branco */
        color: #333; /* Cor do texto */
        margin-bottom: 20px; /* Espaço abaixo do bloco de código */
    }
    

}

`