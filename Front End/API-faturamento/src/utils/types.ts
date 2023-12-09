export interface AmalgamatedStyleProps {
  // Propriedades de Posicionamento
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;

  // Propriedades de Exibição e Flexbox
  display?: string;
  flexdirection?: string;
  justifycontent?: string;
  alignitems?: string;
  gap?: string;

  // Propriedades de Tamanho
  width?: string;
  height?: string;

  // Propriedades de Margem
  margintop?: string;
  marginbottom?: string;
  marginbottom_mobile?: string;

  // Propriedades de Estilo de Texto
  color?: string;
  fontsize?: string;
  fontweight?: string;

  // Propriedades de Estilo de Borda e Fundo
  border?: string;
  background?: string;
  inputborderwidth?: string;
  inputbordercolor?: string;
  inputborderradius?: string;

  // Propriedades de Cursor e Ícone
  cursor?: string;
  iconId?: string;

  // Propriedades de Estilo de Caixa de Entrada (Input)
  inputfontsize?: string;
  inputboxshadow?: string;
  inputmaxheight?: string;
  textmaxwidth?: string;
  required?: string;
  labelfontweight?: string;
}
