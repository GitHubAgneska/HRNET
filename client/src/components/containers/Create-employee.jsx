import CompositeForm from '../elements/Employee-form/Employee-form-composite'
import { EmployeeFormPageWrapper, TitleWrapper, StyledTitle } from '../../style/global_style'

const CreateEmployee = () => {

    return (
        <EmployeeFormPageWrapper>
            <TitleWrapper>
                <StyledTitle>Create a new employee</StyledTitle>
            </TitleWrapper>
            <CompositeForm />
        </EmployeeFormPageWrapper>
    )
}

export default CreateEmployee