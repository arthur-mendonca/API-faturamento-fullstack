// containerBorderRadius: "7px", // para containers

const theme = {
  buttons: {
    borderRadius: {
      default: "60px",
      editButton: "50px",
      excluirButton: "50px",
      detalhesButton: "100px",
    },
    width: {
      cadastrarButton: "267px",
      novaOcorrencia: "180px",
      excluirButton: "50px",
      detalhesButton: "60px",
    },
    height: {
      cadastrarButton: "45px",
      novaOcorrencia: "45px",
      excluirButton: "14px",
      detalhesButton: "10px",
    },
    padding: {
      entrarButton: "12px 65px",
    },
  },

  status: {
    background: {
      finalizado: "#00B386",
      investigacao: "#C6B200",
    },
    color: {
      finalizado: "#E0FFF0",
      investigacao: "#FFF7AA",
    },
    width: "142px",
    heigth: "32px",
  },

  colors: {
    teal: "#00B386",
    tealLight: "#E0FFF0",
    gold: "#C6B200",
    goldLight: "#FFF7AA",
    blue: "#476EE6",
    black: "#000000",
    grayDark: "#787486",
    white: "#FFFFFF",
    grayLight: "#D8D8D8",
    background: "#F7F9FB",
    gray: "#6A6A6A",
    red: "#EA0000",
    redLight: "#FFE1E1",
    grayMedium: "#808080",
  },
  fonts: {
    inter: "Inter, sans-serif",
    comfortaa: "Comfortaa, cursive",
    poppins: "Poppins, sans-serif",
  },
  fontSizes: {
    small: "0.8rem",
    normal: "1rem",
    large: "1.2rem",
    title: "24px",
    textDefault: "18px",
    textMid: "15px",
    textSmall: "14px",
    textSmaller: "13px",
  },
  modal: {
    ocorrencia: {
      width: "690px",
      heigth: "731px",
      borderRadius: "20px",
      boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.15);",
    },
    excluir: {
      width: "375px",
      height: "275px",
      borderRadius: "20px",
    },
  },
  breakpoints: {
    mobile: "992px",
  },
};

export default theme;
