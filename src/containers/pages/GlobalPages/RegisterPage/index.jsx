import { Box, Step, StepConnector, stepConnectorClasses, StepLabel, Stepper, styled } from '@mui/material';
import ToolbarFrame from 'components/elements/ToolbarFrame';
import PersonIcon from '@mui/icons-material/PersonRounded';
import PersonIcon2 from '@mui/icons-material/GroupRounded';
import PaymentIcon from '@mui/icons-material/PaymentRounded';
import { Fragment, useState } from 'react';
import PageRoot from './styled';
import { BoxTransition } from 'components/elements/MotionTransitions';
import FormBiodataSantri from 'components/views/RegisterFragment/FormBiodataSantri';
import FormBiodataOrangTua from 'components/views/RegisterFragment/FormBiodataOrangTua';
import ScreenRegisterPayment from 'components/views/RegisterFragment/ScreenRegisterPayment';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)'
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)'
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1
  }
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  }),
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)'
  })
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <PersonIcon />,
    2: <PersonIcon2 />,
    3: <PaymentIcon />
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['Biodata Santri', 'Biodata Orang Tua', 'Proses Pembayaran'];

export default function RegisterPage() {
  const [values, setValues] = useState({
    fullname: '',
    placeAndDateOfBirth: '',
    address: '',
    gender: '',
    childOrder: '',
    numberOfSiblings: '',
    schoolName: '',
    schoolClass: '',
    schoolDate: '',
    phoneNumber: '',
    email: '',
    fullnameFather: '',
    statusFather: '',
    placeAndDateOfBirthFather: '',
    workFather: '',
    phoneNumberFather: '',
    fullnameMother: '',
    statusMother: '',
    placeAndDateOfBirthMother: '',
    workMother: '',
    phoneNumberMother: '',
    addressParent: '',
    purpose: '',
    paymentPhotoUrl: null
  });

  const [indexStep, setIndexStep] = useState(0);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Fragment>
      <PageRoot>
        <Box className="box-content">
          <ToolbarFrame buttonLink="/masuk" buttonText="Masuk Akun" />
          <Box className="content-section">
            <Box>
              <BoxTransition variant="fadeZoom" duration={0.25}>
                {(() => {
                  switch (indexStep) {
                    case 0:
                      return (
                        <FormBiodataSantri
                          values={{
                            fullname: values.fullname,
                            placeAndDateOfBirth: values.placeAndDateOfBirth,
                            address: values.address,
                            gender: values.gender,
                            childOrder: values.childOrder,
                            numberOfSiblings: values.numberOfSiblings,
                            schoolName: values.schoolName,
                            schoolClass: values.schoolClass,
                            schoolDate: values.schoolDate,
                            phoneNumber: values.phoneNumber,
                            email: values.email
                          }}
                          onChange={handleChange}
                          onChangeStep={setIndexStep}
                        />
                      );

                    case 1:
                      return (
                        <FormBiodataOrangTua
                          values={{
                            fullnameFather: values.fullnameFather,
                            statusFather: values.statusFather,
                            placeAndDateOfBirthFather: values.placeAndDateOfBirthFather,
                            workFather: values.workFather,
                            phoneNumberFather: values.phoneNumberFather,
                            fullnameMother: values.fullnameMother,
                            statusMother: values.statusMother,
                            placeAndDateOfBirthMother: values.placeAndDateOfBirthMother,
                            workMother: values.workMother,
                            phoneNumberMother: values.phoneNumberMother,
                            addressParent: values.addressParent,
                            purpose: values.purpose
                          }}
                          onChange={handleChange}
                          onChangeStep={setIndexStep}
                        />
                      );

                    case 2:
                      return (
                        <ScreenRegisterPayment
                          values={values}
                          onChangeStep={setIndexStep}
                          setPayment={(value) => setValues({ ...values, paymentPhotoUrl: value })}
                        />
                      );

                    default:
                      <></>;
                  }
                })()}
              </BoxTransition>
            </Box>
            <BoxTransition variant="fade" duration={0.25}>
              <Stepper alternativeLabel activeStep={indexStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </BoxTransition>
          </Box>
        </Box>
      </PageRoot>
    </Fragment>
  );
}
