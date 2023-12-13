export interface StyleProps {
  // Propriedades de Posicionamento
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;

  // Propriedades de Exibição e Flexbox
  display?: string;
  flexdirection?: string;
  flex_direction?: string;
  justifycontent?: string;
  justify_content?: string;
  alignitems?: string;
  align_items?: string;
  gap?: string;
  align_self?: string;

  // Propriedades de Tamanho
  width?: string;
  height?: string;
  max_heigth?: string;
  overflowY?: string;
  overflowX?: string;
  max_width?: string;
  size?: string;
  z_index?: string;

  // Propriedades de Margem
  margintop?: string;
  margin_top?: string;
  marginbottom?: string;
  margin_bottom?: string;
  marginbottom_mobile?: string;
  margin_left?: string;
  margin_right?: string;
  margin?: string;

  //Propriedades de padding
  padding?: string;
  padding_top?: string;
  padding_bottom?: string;
  padding_left?: string;
  padding_right?: string;

  // Propriedades de Estilo de Texto
  color?: string;
  fontsize?: string;
  font_size?: string;
  fontweight?: string;

  // Propriedades de Estilo de Borda e Fundo
  border?: string;
  background?: string;
  background_color?: string;
  inputborderwidth?: string;
  inputbordercolor?: string;
  inputborderradius?: string;
  border_radius?: string;
  border_color?: string;

  // Propriedades de Cursor e Ícone
  cursor?: string;
  iconId?: string;

  // Propriedades de Estilo de Caixa de Entrada (Input)
  inputfontsize?: string;
  inputboxshadow?: string;
  boxshadow?: string;
  inputmaxheight?: string;
  textmaxwidth?: string;
  required?: string;
  labelfontweight?: string;

  //outros tipos

  status?: string;
  fill?: string;
  hoverBackground?: string;
  statusActive?: boolean;
}
