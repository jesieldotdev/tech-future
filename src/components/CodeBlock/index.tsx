import React from 'react';

export const PostBody = ({ body }) => {
  // Função para renderizar o conteúdo HTML com destaque de sintaxe
  return (
    <div 
      className="post-body"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
};
